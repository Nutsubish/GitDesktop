#################### 7kyu ###############
#chagdebulidan bevri maq gaketebuli


#Triangular Treasure


# def triangular(n):
#       if n < 0:
#         return 0
#       else:
#         return (n * (n + 1)) // 2
# vtqvat n=5
# 5*6 // 2 = 15
#|    * = 1
#|   ** - 2
#|  *** - 3     = 15    
#| **** - 4  
#|***** - 5  



#Find The vowels
# def vowel_indices(word):
#     a = ["a", "e", "i", "o", "u", "y"]
#     list1 = []
#     index = 1
    
#     for i in word: 
#         if i.lower() in a:   #aq yvela aso gadgvyavs patara asoshi radgan a listshic patara asoebi maqvs 
#             list1.append(index) 
#         index += 1 #index damokidebulia iteraciebis raodenobaze            
#     return list1



####################### 6kyu ##########################

### chagdebulebidan 1 maqvs ukve gaketebuli

#Break camelCase
# def solution(s):
#     result = ""
    
#     for i in s:  
#         if i.isupper() and result:
#             result += " " + i
#         else:
#             result += i
#     return result



#CamelsCase Method(ver gavige)
# def camel_case(s):
#     index = 1
#     for i in s:
#         if i == " ":
#             index += i
#         return i[index].upper and i[0].upperreturn i.upper and i[0].upper



################   5kyu  ###########################



#The Hashtag Generator(dzaan cota maklia)
# def generate_hashtag(s):
#     for i in s:
#         if i == " ":
#             s.pop(i)
#         return "#" + s
#     if len(s) >= 140:
#         return False
#     else:
#         return False


#













    







