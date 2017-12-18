      integer ia(29), i, n
      real*4 aa(20)
      character*120 buf
      n = 7
      open(9, file='tform.txt')
      
      read (9,100), (ia(i), i=1,n)
100   format(/10(I7,1X))
      print *, 'ia:', (ia(i), i=1,n)

      read (9,3332), (aa(i), i=1,7)
 3332 FORMAT(/10(F7.4,1X))
      print *, 'aa:', (aa(i), i=1,7)

      read (9,3332), (aa(i), i=1,7)
      print *, 'aa:', (aa(i), i=1,7)

      close(9)
      end

