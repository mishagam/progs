      program rec_struct
      ! type(aaa) a0
      
      type aaa
         real*8 d0
      end type
      
      type bbb
         integer ii
         real*4 ff
         real*8 dd
         type(aaa)  b
      end type
      
      type(bbb) a
      
      a%b%d0 = 987.123D59
      print *, 'a.b.d0 = ', a%b%d0
      stop
      end

