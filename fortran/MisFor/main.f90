! old fortran comment
program hello
    implicit none
    integer i,memest, status
    real aa(10000000)
    common /stataa/ aa
    REAL, ALLOCATABLE :: FLUXW(:,:,:)

    memest = 163*331*16*3*4
    print *, 'Hello World!', memest
    ALLOCATE(FLUXW(163, 331, 16), STAT=status)
    print *, 'allocate passed'
    do i = 1,8
        aa(i) = 10.1*i
        FLUXW(i,i,i) = 99.99*i
        print *,'i,aa,flux=',i, aa(i),FLUXW(i,i,i)
    enddo
    DEALLOCATE(FLUXW)
    print 110, (i*i,i=1,10)
 110 format("Cycle print: 10i2")
    print *, 'Done'

end program

