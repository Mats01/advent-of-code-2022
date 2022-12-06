MAGIC_DISTANCE = 4

my_input = []
with open('input.txt', 'r') as f:
    my_input = list(f.readlines()[0])


last_4 = my_input[0:MAGIC_DISTANCE]

solution = MAGIC_DISTANCE

for char in my_input[MAGIC_DISTANCE:]:
  if(len(set(last_4)) == MAGIC_DISTANCE):
    break
  last_4 = last_4[1:] + [char]
  solution += 1
  
print(solution)
