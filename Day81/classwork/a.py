def func(sia,vax):
  sias= []
  for i in sia:
    if i != sia[vax]:
      sias.append(i)
  return sias
print(func([0,1,5,6],-1))
