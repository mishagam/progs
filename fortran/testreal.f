      implicit real*8(a-h,o-z)
c      real*8 aaa, ab, aab
c      real*4 ba,b,bab
      ba = 200.1D0
      b = 0.00001D0
      b = b*0.00001D0
      bab = ba+b
      print *, 'ba, b, bab = ', ba, b, bab
      aaa = 200.1D0
      ab = 0.00001D0
      ab = ab*0.00001D0
      aab = aaa+ab
      print *, 'aaa,ab,aab = ',aaa,ab,aab

      x = 2.2
      call expm(x)
      x=2.2D0
      call expm(x)
      stop
      end

      subroutine expm(x)
      implicit real*8(a-h,o-z)
      e = 1D0
      r = 1D0
      n = 1.0
      do 50 i=1,50
        e = e+r*x
        r = r*x / n
        n = n+1
50    continue
      print *, 'expm(), x, e = ', x, e
      return
      end
