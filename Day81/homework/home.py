#1
# list1=[1,2,3]
# list2 = [4,5,6]
# print(list1+list2)

#2
# lists1=[1,3,4,5]
# list2=[]
# for i in lists1:
#     list2.append(i*i)
# print(list2)

#3
# lists1 = [1,2,4,6,3,9]
# list2 = []
# for i in lists1:
#     if i % 2 != 0:
#         list2.append(i)
# print(list2)

#4
# def find_same(list1, list2):
#     same = []
#     for i in list1:
#         if i in list2 and i not in same:
#             same.append(i)
            
#     return same
# print(find_same([1,2,"a","b"],[1,"a","c",3]))

#5
# def remove(lists):
#     unique_list = []
#     seen = set()
#     for i in lists:
#         if i not in seen:
#             unique_list.append(i)
#             seen.add(i)
#     return unique_list
# print(remove([1,2,3,1,2]))

#6
# myinfo = {
#     "name": "sigma",
#     "age" : 69,
# }
# myfinfo = {
#     "names" : "alpha and beta",
#     "ages" : "420,228"
# }

# allinfo = {**myinfo,**myfinfo}
# print(allinfo)

#7
# dict1 = {
#     'a' : 3,
#     'b' : 2,
# }
# dicts = {}
# for i in dict1:
#     i *= i
    
# print(dict1)

#8
# dict1 = {
#     "a" : 9,
#     "b" : 1,
#     "c" : 3,
# }
# list1= []
# list1.append(dict1.keys())
# print(list1)

#9 ?

#10
# def filter_dict_by_value(input_dict, value):
#     filtered_dict = {}
    
#     for key, val in input_dict.items():
#         if val == value:
#             filtered_dict[key] = val
            
#     return filtered_dict



#11
# n= 5
# lists = [] 
# lists1= []
# for i in range(n):
#     lists.append(i*n)
#     print(lists[-1])


#12









#13
# def names(name1,name0):
#     for i in name1:
#         if i in name0:
#             return True
#         else:
#             return False
# print(names("vaso","lasha"))



#14
# names = "vaso baso laso"
# print(names[::-1])


#15
# def new_func(a):
#     doyou = input("enter a todo thing: ")
#     for i in doyou:
#         a.append(doyou)
#         return f"you have in todolists {a[0]} do you need to add anything? (y/n)"
#     if "n" == True:
#         return "okay"
#     else: 
#         return doyou

# new_func(a=[])








