c ===========Mandelbrot program ================      
      program Mandelbrot
      integer w,h, n, CHUNK
      real*8 x0,y0,scl
      integer data(800, 800)
      open(7, file='mandel_parms.txt')
      read (7, *) w, h, x0, y0, scl
      close(7)
      print *, 'Parameters read', w, h, x0, y0, scl
      CHUNK = 20
!$OMP PARALLEL SHARED(data,x0,y0,scl,w,h,CHUNK) PRIVATE(i,j,x,y)
!$OMP DO SCHEDULE(DYNAMIC,CHUNK)
      do i = 1, h
         do j = 1, w
            x = x0 + scl * (j - w/2)
            y = y0 + scl * (i - h/2)
            data(i,j) = mandel(x,y)
         end do
      end do
!$OMP END DO NOWAIT
!$OMP END PARALLEL
      print *, 'Mandelbrot calculations finished'
      open (8, file='mandel.out',status='unknown',
     &  form='unformatted',access='stream')
      do i = 1,h
         write(8) (data(i,j),j=1,w)
         if (mod(i,200) .eq. 0) then
            print *, 'Line ', i
         end if
      end do
      close(8)
      print *, 'Output mandel.out finished'
      stop
      end      
c ========== Mandel function ====================
      integer function mandel(cx, cy)
      complex*8 x, c
      integer n
      n = 0
      c = CMPLX(cx, cy)
      x = CMPLX(0,0)
      do while (abs(x) < 2 .and. n < 1000)
         x = x*x + c
         n = n+1
      end do
      mandel = n
      return 
      end
      
      
      
      