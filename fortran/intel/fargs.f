      program fargs

      print *,'arguments in fortran'
      call fortargs()
      stop
      end

      subroutine fortargs()
      integer alen,i,na
      character *30 arg
      character *30 aa(20)


      do i = 1,20
        call GetArg(i,arg(1:),alen)
        if (alen > 0) then
          print *,'read argument ',arg
          aa(i) = arg
          if (trim(arg).EQ."-a") then
             print *, "read expected -a argument"
          end if
        else
          exit
        end if
      end do
      na = i-1
      print *,"read ", na, " arguments"
      do i = 1,na
        print *,i,aa(i)
      end do

      end subroutine fortargs


      subroutine testargs()
      integer err
      character *30 arg
! first argument
      CALL GETARG(1,ARG(1:),ERR)
      print *,'Err = ', err
      if (err <= 0) then
         print *,'No arguments'
      else 
         print *,'Argument |'//trim(arg)//"|"
      end if
! second argument
      CALL GETARG(2,ARG(1:),ERR)
      print *,'Err = ', err
      if (err <= 0) then
         print *,'No second argument'
      else 
         print *,'Argument |'//trim(arg)//"|"
      end if
       end subroutine testargs
      
