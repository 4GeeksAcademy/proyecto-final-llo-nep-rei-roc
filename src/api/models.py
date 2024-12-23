from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone
from sqlalchemy import Column, ForeignKey, Integer, String, Enum
from sqlalchemy.orm import relationship, declarative_base

db = SQLAlchemy()

class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Users {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        }

class Rutas(db.Model):
    __tablename__ = 'rutas'
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(120), unique=True, nullable=False)
    detalles = db.Column(db.JSON, nullable=True)
    usuario_id = db.Column(db.Integer, ForeignKey("users.id"), nullable=True) 
    category_id = db.Column(db.Integer, ForeignKey("categorias.id"), nullable=True)
    fecha_creada = db.Column(db.Date, nullable=False)
    fecha_inicio = db.Column(db.Date, nullable=False)

    user = relationship('Users', foreign_keys=[usuario_id], backref="rutas")
    categoria = relationship('Categorias', foreign_keys=[category_id], backref="rutas")

    def __repr__(self):
        return f'<Rutas {self.titulo}>'

    def serialize(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            "detalles": self.detalles,
            "usuario_id": self.usuario_id,
            "category_id": self.category_id,
            "fecha_creada": self.fecha_creada.isoformat() if self.fecha_creada else None,
            "fecha_inicio": self.fecha_inicio.isoformat() if self.fecha_inicio else None,
        }

class Categorias(db.Model):
    __tablename__ = 'categorias'
    id = db.Column(db.Integer, primary_key=True)
    categoria = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f'<Categorias {self.categoria}>'

    def serialize(self):
        return {
            "id": self.id,
            "categoria": self.categoria,
        }

class Eventos(db.Model):
    __tablename__ = 'eventos'
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(120), unique=True, nullable=False)
    detalles = db.Column(db.JSON, nullable=True)
    tipo = db.Column(db.String(120), nullable=False)
    fecha = db.Column(db.Date, nullable=False)
    category_id = db.Column(db.Integer, ForeignKey("categorias.id"), nullable=False)
    rutas_id = db.Column(db.Integer, ForeignKey("rutas.id"), nullable=False)

    categoria = relationship('Categorias', backref="eventos")
    ruta = relationship('Rutas', backref="eventos")

    def __repr__(self):
        return f'<Eventos {self.titulo}>'

    def serialize(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            "detalles": self.detalles,
            "tipo": self.tipo,
            "fecha": self.fecha.isoformat() if self.fecha else None,
            "category_id": self.category_id,
            "rutas_id": self.rutas_id
        }

class Rutas_eventos(db.Model):
    __tablename__ = 'rutas_eventos'
    id = db.Column(db.Integer, primary_key=True)
    ruta_id = db.Column(db.Integer, ForeignKey("rutas.id"), nullable=False)
    evento_id = db.Column(db.Integer, ForeignKey("eventos.id"), nullable=False)

    ruta = relationship("Rutas", backref="rutas_eventos")
    evento = relationship("Eventos", backref="rutas_eventos")

    def __repr__(self):
        return f'<Rutas_eventos {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "ruta_id": self.ruta_id,
            "evento_id": self.evento_id
        }

class Favorites(db.Model):
    __tablename__ = 'favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey("users.id"), nullable=True)
    rutas_id = db.Column(db.Integer, ForeignKey("rutas.id"), nullable=True)
    eventos_id = db.Column(db.Integer, ForeignKey("eventos.id"), nullable=True)

    ruta = relationship("Rutas", backref="favorites")
    evento = relationship("Eventos", backref="favorites")

    def __repr__(self):
        return f'<Favorites {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "rutas_id": self.rutas_id,
            "eventos_id": self.eventos_id
        }

class Comentarios(db.Model):
    __tablename__ = 'comentarios'
    id = db.Column(db.Integer, primary_key=True)
    comentario = db.Column(db.Text, nullable=True)
    fecha_creacion = db.Column(db.DateTime, nullable=False, default=datetime.now(timezone.utc))
    tipo = db.Column(db.String(120), nullable=False)
    from_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    to_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    from_user = db.relationship('Users', foreign_keys=[from_id], backref="comentarios_realizados")
    to_user = db.relationship('Users', foreign_keys=[to_id], backref="comentarios_recibidos")

    def __repr__(self):
        return f'<Comentarios {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "comentario": self.comentario,
            "fecha_creacion": self.fecha_creacion.isoformat() if self.fecha_creacion else None,
            "tipo": self.tipo,
            "from_id": self.from_id,
            "to_id": self.to_id,
        }

class Valoraciones(db.Model):
    __tablename__ = 'valoraciones'
    id = db.Column(db.Integer, primary_key=True)
    valoracion = db.Column(db.Float, nullable=True)
    tipo = db.Column(db.String(120), nullable=False)
    from_id = db.Column(db.Integer, ForeignKey('users.id'))
    to_id = db.Column(db.Integer, ForeignKey('users.id'))

    from_user = relationship('Users', foreign_keys=[from_id], backref="valoraciones_realizados")
    to_user = relationship('Users', foreign_keys=[to_id], backref="valoraciones_recibidos")

    def __repr__(self):
        return f'<Valoraciones {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "valoracion": self.valoracion,
            "tipo": self.tipo,
            "from_id": self.from_id,
            "to_id": self.to_id,
            "from_user": self.from_user.serialize() if self.from_user else None, 
            "to_user": self.to_user.serialize() if self.to_user else None
        }

