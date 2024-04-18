# Tyeshela_Crew = ["Alexandre Katsarava", "Gio Gagnidze", "Giorgi Gelashvili", "Luka Zazashvili", "Luka Tevzadze", "Davit Meparishvili", "Luka Kevkhishvili", "Jemiko Kikava", "Luka Turadze", "Omar Focxoraia", "Lazare Gogoberidze", "Vato Xeladze"]
# name = input()
# print(Tyeshela_Crew[len(name)])

Tyeshela_Crew = ["Alexandre Katsarava", "Gio Gagnidze", "Giorgi Gelashvili", "Luka Zazashvili", "Luka Tevzadze", "Davit Meparishvili", "Luka Kevkhishvili", "Jemiko Kikava", "Luka Turadze", "Omar Focxoraia", "Lazare Gogoberidze", "Vato Xeladze"]
longest_names = []
max_lengths = [0, 0]

for name in Tyeshela_Crew:
    name_length = len(name)
    if name_length > max_lengths[0]:
        max_lengths[1] = max_lengths[0]
        longest_names[1] = longest_names[0]
        max_lengths[0] = name_length
        longest_names[0] = name
    elif name_length > max_lengths[1] and name_length != max_lengths[0]:
        max_lengths[1] = name_length
        longest_names[1] = name

print(longest_names)


