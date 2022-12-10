
input = []

with open('input.txt', 'r') as f:
  input = f.read().splitlines()
  

solution = [1]

for line in input:
  if(line == 'noop'):
    solution.append(solution[-1])
    
  else:
    amount = int(line.split(' ')[1])
    solution.append(solution[-1])
    solution.append(solution[-1] + amount)
    

  
solution_sum = 0
for i in range(19, len(solution), 40):
    solution_sum += solution[i]* (i+1)
    
    
for i in range(0, len(solution), 40):
  for j in range(i, i+40):
    if(j >= len(solution)-1):
      break
    if(j-i in [x for x in range(solution[j]-1, solution[j]+2)]):
      print('#', end='')
    else:
      print('.', end='')

  print()
    
print(solution_sum)
# print(solution)