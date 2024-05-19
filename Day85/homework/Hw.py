# 1. Sort
def sort_dict_keys(dictionary):
    return sorted(dictionary.keys())



# 2. Find Maximum or Minimum Value
def find_max_value(dictionary):
    max_key = max(dictionary, key=dictionary.get)
    return max_key, dictionary[max_key]



def find_min_value(dictionary):
    min_key = min(dictionary, key=dictionary.get)
    return min_key, dictionary[min_key]




# 3. Combining Items
def combine_dicts(*dicts):
    combined_dict = {}
    for d in dicts:
        combined_dict.update(d)
    return combined_dict



# 4. Check for Key Existence
def check_key_existence(dictionary, key):
    return dictionary.get(key) is not None



# 5. Remove and Return Value
def remove_and_return_value(dictionary, key):
    return dictionary.pop(key, None)

# 6. Create a function called manual_keys
def manual_keys(dictionary):
    return list(dictionary.keys())

# 7. Create a function called manual_values
def manual_values(dictionary):
    return list(dictionary.values())



# 8. Create a function called manual_items
def manual_items(dictionary):
    return list(dictionary.items())



# 9. Create a function called manual_get
def manual_get(dictionary, key, default=None):
    return dictionary.get(key, default)



# 10. Create a function called manual_pop
def manual_pop(dictionary, key, default=None):
    return dictionary.pop(key, default)


