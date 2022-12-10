
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
    
print(solution_sum)