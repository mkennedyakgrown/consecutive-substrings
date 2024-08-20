def consecutive_substrings(string):
    substrings = []
    for i in range(len(string)):
        substring = string[i]
        substrings.append(substring)
        for j in range(i + 1, len(string)):
            substring += string[j]
            substrings.append(substring)

    return substrings

print(consecutive_substrings("abcdef"))
print(consecutive_substrings("asdklfj"))
print(consecutive_substrings(""))
print(consecutive_substrings("MyNameIsMatthew"))