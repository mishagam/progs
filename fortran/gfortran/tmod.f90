module test
    integer:: a
  contains
    subroutine foo()
      print *,'Foo called'
    end subroutine
end module