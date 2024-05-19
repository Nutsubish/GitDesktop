# def filter_dict(dict1, filter_value):
#     filtered_dict = {}

#     for key, value in dict1.items():
#         if value == filter_value:
#             filtered_dict[key] = value
    
#     return filtered_dict

# dict1 = {"a": 1, "b": 2, "c": 2, "d": 1, "e": 4}

# print(filter_dict(dict1, 1))


def manual_get(dict1, dic_key,value):
    if dic_key in dict1:
        return dict1[dic_key]
    else:
        return value

acc = {
    "fullname": "Luka Tskhvaradze",
    "lover": False,
    "money": True,
}

print(manual_get(acc,"fullname",2))