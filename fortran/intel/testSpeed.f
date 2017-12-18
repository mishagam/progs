      program testSpeed
      integer i,j
      real*8 s, summ

      print *, 'testing speed'
      s = 0
      do i = 1,1000000
        do j = 1,10000
          s = s+s
          summ = summ + 1.0D0
        end do
      end do
      print *, 's, summ= ', s, summ
      stop
      end
