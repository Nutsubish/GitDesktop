#exla mogvces tu adamianis saxelshi shedis aso i mashin unda gadaviyvanot supesiashi eg adamiani 

# names = ["akaki", "vaso", "ikaki"]

# supersia = []


# for name in names:
#     if name.count('i') == 2:
#         supersia.append(name.capitalize())

# print(supersia)



names = ["akaki", "vaso", "jemala"]
surnames = ["akakishvili", "vasoze", "jemalava"]


result = []

for i in range(len(names)):
    full_name = names[i] + surnames[i]
    if len(full_name) < 13:
        full_name = full_name.upper()
    result.append(full_name)

print(result)


