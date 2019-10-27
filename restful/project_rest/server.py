from flask import Flask, request
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps
from flask import jsonify
from flask_cors import CORS
db_connect = create_engine("mysql+pymysql://amit:br7p6700@127.0.0.1:3306/stdman")
app = Flask(__name__)
api = Api(app)
CORS(app)

# print(db_connexct.table_names())

class students(Resource):
    def post(self):
        conn = db_connect.connect() # connect to database
        data = request.get_json()
        res = []
        print(data)
        usn = data['usn']
        name = data['name']
        check = data['attcheck']
        query = None
        if(check == True):
            query = conn.execute("select * from students where name = '{}'".format(name)).fetchall() # This line performs query and returns json result
        else:
            query = conn.execute("select * from students where srn = '{}'".format(usn)).fetchall() # This line performs query and returns json result                        
        ans = {}
        for i in range(len(query)):
            ans = {
                "usn": query[i][0],
                "name": query[i][1],
                "dept": query[i][2],
                "address": query[i][3],
                "gender": query[i][4],
                "parent": query[i][5],
                "picLoc": query[i][6]
            }
            res.append(ans)
        return { "status": "success"
            ,'data': res}

class login(Resource):
    def post(self):
        conn = db_connect.connect()
        data = request.get_json()
        print(data)
        isadmin = False
        if(len(data) == 3):
            isadmin = data['isadmin']
        username = data['username']
        password = data['password']
        res = {"status": "success", "who": "student/teacher" , "username": ''}
        if not isadmin:
            query = conn.execute("select username from auth where username = '{}' and password = md5('{}')".format(username, password)).fetchall()
        else:
            query = conn.execute("select username from admin where username = '{}' and password = md5('{}')".format(username, password)).fetchall()
            res["who"] = "admin"
        print(query)
        if(len(query) != 0):
            # pass
            res["username"] = query[0][0]
        else:
            res["status"] = "failed"
        return(res)

class signup(Resource):
    def post(self):
        # try:
        conn = db_connect.connect()
        data = request.get_json()
        firstName = data['firstName']
        lastName = data['lastName']
        gender = data['gender']
        parentName = data['parentName']
        dept = data['dept']
        address = data['address']
        university = data['university']
        usn = data['usn']
        password = data['password']
        subjects = data['subjects']
        coordinator = data['coordinator']
        message = "success"
        if(coordinator):
            coordinator = 1
        else:
            coordinator = 0
            # print(subjects)
            ann = subjects[0]

        query = conn.execute("insert into students values('{}', '{}', '{}', '{}', '{}', '{}', NULL, '{}', '{}', '{}')".format(
            usn, firstName, dept, address, gender, parentName, coordinator, university, lastName))
        conn.execute("insert into auth values('{}', md5('{}'))".format(usn, password))
        print("insert into students values('{}', '{}', '{}', '{}', '{}', '{}', NULL, '{}', '{}', '{}')".format(
            usn, firstName, dept, address, gender, parentName, coordinator, university, lastName))
        # print("query")
        if(coordinator == 0):
            for i in subjects:
                print("insert into courses values('{}', '{}')".format(usn, i))
                conn.execute("insert into courses values('{}', '{}')".format(usn, i))
        # except:
        #     message = "error"

        return({"status": message})

class subjects(Resource):
    def get(self):
        conn = db_connect.connect()
        query = conn.execute("select * from subjects").fetchall()
        ans = []
        for i in query:
            ans.append({"text": i[1], "value": i[0]})
        # print(ans)
        return(ans)


class studentdata(Resource):
    def get(self, srn):
        conn = db_connect.connect() # connect to database
        query = conn.execute("select * from students where srn = '{}'".format(srn)).fetchall() # This line performs query and returns json result
        print(query[0])
        ans = {
            "usn": query[0][0],
            "name": query[0][1],
            "dept": query[0][2],
            "address": query[0][3],
            "gender": query[0][4],
            "parent": query[0][5],
            "picLoc": query[0][6]
        }
        return jsonify(ans) # Fetches first column that is Employee ID
# class Tracks(Resource):
#     def get(self):
#         conn = db_connect.connect()
#         query = conn.execute("select trackid, name, composer, unitprice from tracks;")
#         result = {'data': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}
#         return jsonify(result)

# class Employees_Name(Resource):
#     def get(self, employee_id):
#         conn = db_connect.connect()
#         query = conn.execute("select * from employees where EmployeeId =%d "  %int(employee_id))
#         result = {'data': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}
#         return jsonify(result)
        

api.add_resource(students, '/student') # Route_1
api.add_resource(studentdata, '/student/<srn>') # Route_2
api.add_resource(login, '/login')
api.add_resource(signup, '/signup')
api.add_resource(subjects ,"/subjects")
# api.add_resource(Employees_Name, '/employees/<employee_id>') # Route_3


if __name__ == '__main__':
     app.run(port='5000', debug=True)