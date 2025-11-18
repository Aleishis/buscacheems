from persistence.db import get_connection

class Winner:
    
    def __init__(self, id, name, email, phrase):
        self.name = name
        self.email = email
        self.id = id
        self.phrase = phrase
    
    def save(self):
        try:
            connection = get_connection()
            cursor = connection.cursor()
            
            query = "INSERT INTO winners (name, email, phrase) VALUES (%s,%s,%s)"
            cursor.execute(query, (self.name, self.email, self.phrase)) #segundo argumento es un tuple, list, dict
            connection.commit()
            
            
            self.id = cursor.lastrowid
            return self.id
        except Exception as ex:
            print("Error al guardar registro: ", ex)
            return 0
        finally:
            cursor.close()
            connection.close()