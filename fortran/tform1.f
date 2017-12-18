      integer ia(29), i, n
      real*4 aa(20)
      character*120 buf
      REAL*4 TMP[ALLOCATABLE](:)
      
      n = 7
      open(5, file='tform1.txt')
      
      read (5,'(A)') buf
      print *, 'buf:', buf
      
      read (5, '(/A)')buf
      print *, 'buf:', buf
      read (buf,100) (ia(i), i=1,6)
100   format(10(I7,1X))
      print *, 'ia:', (ia(i), i=1,6)

      ALLOCATE(TMP(1:20))     
      read (5,3332), (TMP(i), i=1,7)
 3332 FORMAT(/10(F7.4,1X))
      print *, 'aa:', (TMP(i), i=1,7)

      close(5)
      end

