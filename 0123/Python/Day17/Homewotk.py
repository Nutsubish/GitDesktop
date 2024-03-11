import random

names = ["janeza", "tyeshela", "gabo", "sabo", "kutanidze"]


chosen_lead = random.choice(names)


names.remove(chosen_lead)


print("Chosen Lead:", chosen_lead)
print("gaanaxle dzmao:", names)
