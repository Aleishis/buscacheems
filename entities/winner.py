from persistence.db import get_connection

class Winner:
    
    def __init__(self, id, name, email):
        self.name = name
        self.email = email
        self.id = id
    
    def save(self):
        connection = get_connection()
        cursor = connection.cursor()
        
        query = "INSERT INTO winners (name, email) VALUES (%s,%s)"
        cursor.execute(query, (self.name, self.email)) #segundo argumento es un tuple, list, dict
        