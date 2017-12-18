program MainProg
  integer i
     ! structures with STRUCTYE instead of TYPE and . instead of % doesn't work (((
     TYPE item
       INTEGER id
       CHARACTER(LEN=200) description
       REAL price
     END TYPE
     
     ! Define two variables, an single record of type ``item''
     ! named ``pear'', and an array of items named ``store_catalog''
     TYPE(item) pear, store_catalog(100)
     
     ! We can directly access the fields of both variables
     pear%id = 92316
     pear%description = "juicy D'Anjou pear"
     pear%price = 0.15
     store_catalog(7)%id = 7831
     store_catalog(7)%description = "milk bottle"
     store_catalog(7)%price = 1.2
     
     ! We can also manipulate the whole structure
     store_catalog(12) = pear
     print *, store_catalog(12)

  print *, 'MainProg with structures done'
  stop
end program