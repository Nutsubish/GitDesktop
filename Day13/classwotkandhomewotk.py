# full_name="GOA"

# vowel=0

# for i in range(0,len(full_name)):
#     print(full_name(i))
#     if i =="a" or i =="i" or i == "e"  or i =="u":
#         vowel +=1 
#     print(str(vowel))


#unda gagveketebina momis dadis da chemi eseigi sons namebis vowelis datvla 

names = {
    'amo': 'dad',
    'nana': 'mom',
    'nika': 'son'
}


for name, role in names.items():
    vowel_count = sum(1 for letter in name if letter.lower() in 'aeiou')
    print(f"{name} ({role}) has {vowel_count} vowels.")



