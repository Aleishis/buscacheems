import pymysql 

def get_connection():
    return pymysql.connect(
        host='127.0.0.1',
        #port=3306 si el puerto es 3306, se puede omitir esta linea
        user='root',
        password='theycallmethiagO24',
        database='cheems'
    )