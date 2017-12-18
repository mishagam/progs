class ScalClas {
  def aaa(): String =  {
    return "Line from My Class"
  }
  
  def pascal(c:Int, r:Int): Int = {
    if (c==0 || r==0) {
      1
    } else {
      pascal(c-1, r) + pascal(c, r-1)
    }
  }
}