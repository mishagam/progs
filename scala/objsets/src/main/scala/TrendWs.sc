import objsets._

object TweetsWs {
    val set1 = new Empty                          //> set1  : objsets.Empty = objsets.Empty@17eae6c
    val ta = new Tweet("a", "a body", 20)         //> ta  : objsets.Tweet = User: a
                                                  //| Text: a body [20]
    val set2 = set1.incl(ta)                      //> set2  : objsets.TweetSet = objsets.NonEmpty@176829e
    val set3 = set2.incl(new Tweet("b", "b body", 20))
                                                  //> set3  : objsets.TweetSet = objsets.NonEmpty@9e40d2
    val c = new Tweet("c", "c body", 7)           //> c  : objsets.Tweet = User: c
                                                  //| Text: c body [7]
    val d = new Tweet("d", "d body", 9)           //> d  : objsets.Tweet = User: d
                                                  //| Text: d body [9]
    val set4c = set3.incl(c)                      //> set4c  : objsets.TweetSet = objsets.NonEmpty@1b1c978
    val set4d = set3.incl(d)                      //> set4d  : objsets.TweetSet = objsets.NonEmpty@1220c1b
    val set5 = set4c.incl(d)                      //> set5  : objsets.TweetSet = objsets.NonEmpty@48c33e
 
  def size(set: TweetSet): Int = {
    if (set.isEmpty) 0
    else 1 + size(set.tail)
  }                                               //> size: (set: objsets.TweetSet)Int
  def twa(tw:Tweet):Boolean = tw.user == "a"      //> twa: (tw: objsets.Tweet)Boolean
  val tre = new EmptyTrending()                   //> tre  : objsets.EmptyTrending = EmptyTrending
  val tra = new NonEmptyTrending(ta, new EmptyTrending)
                                                  //> tra  : objsets.NonEmptyTrending = NonEmptyTrending(20, EmptyTrending)
  tra.tail                                        //> res0: objsets.Trending = EmptyTrending
  tre + ta                                        //> res1: objsets.NonEmptyTrending = NonEmptyTrending(20, EmptyTrending)
  tra + c                                         //> res2: objsets.Trending = NonEmptyTrending(20, NonEmptyTrending(7, EmptyTrend
                                                  //| ing))
  List("android", "Android", "galaxy", "Galaxy", "nexus", "Nexus")
                                                  //> res3: List[java.lang.String] = List(android, Android, galaxy, Galaxy, nexus,
                                                  //|  Nexus)
}