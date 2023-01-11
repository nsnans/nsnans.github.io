# 🐍 Python - JSON

## 🐍【json.dumps】Python对象转JSON
```py
import json

xxg = [{   
    'xxg' : 1, 
    'xxgg' : 2, 
    'xxggg' : 3, 
}]

json_xxg = json.dumps(xxg)
print(json_xxg)
# [{"xxg": 1, "xxgg": 2, "xxggg": 3}]
```
## 🐍【json.loads】JSON转Python对象
```py
import json

json_xxg = '{"xxg":1,"xxgg":2,"xxggg":3}'

xxg= json.loads(json_xxg)
print(xxg)
# {'xxg': 1, 'xxgg': 2, 'xxggg': 3}
```