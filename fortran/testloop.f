      program tprep
      i = 0
      do while (i < 10)
         print *, 'i = ', i
         if (i == 5) exit
         i = i+1
      end do
      do j=1,6
         print *, 'j=', j
      end do
      print *, 'loop done'
      stop
      end