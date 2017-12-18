import objsets._

object TweetsWs {
    val set1 = new Empty                          //> set1  : objsets.Empty = _empty_
    val ta = new Tweet("a", "a body", 20)         //> ta  : objsets.Tweet = User: a
                                                  //| Text: a body [20]
    val set2 = set1.incl(ta)                      //> set2  : objsets.TweetSet = (_empty_, a body, _empty_)
    val set3 = set2.incl(new Tweet("b", "b body", 20))
                                                  //> set3  : objsets.TweetSet = (_empty_, a body, (_empty_, b body, _empty_))
    val c = new Tweet("c", "c body", 7)           //> c  : objsets.Tweet = User: c
                                                  //| Text: c body [7]
    val d = new Tweet("d", "d body", 9)           //> d  : objsets.Tweet = User: d
                                                  //| Text: d body [9]
    val set4c = set3.incl(c)                      //> set4c  : objsets.TweetSet = (_empty_, a body, (_empty_, b body, (_empty_, c 
                                                  //| body, _empty_)))
    val set4d = set3.incl(d)                      //> set4d  : objsets.TweetSet = (_empty_, a body, (_empty_, b body, (_empty_, d 
                                                  //| body, _empty_)))
    val set5 = set4c.incl(d)                      //> set5  : objsets.TweetSet = (_empty_, a body, (_empty_, b body, (_empty_, c b
                                                  //| ody, (_empty_, d body, _empty_))))
 
  def size(set: TweetSet): Int = {
    if (set.isEmpty) 0
    else 1 + size(set.tail)
  }                                               //> size: (set: objsets.TweetSet)Int
  def twa(tw:Tweet):Boolean = tw.user == "a"      //> twa: (tw: objsets.Tweet)Boolean
  size(set1.filter(tw => tw.user == "a"))         //> res0: Int = 0
  val fil5 = set1.filter(tw => tw.user == "a")    //> fil5  : objsets.TweetSet = _empty_
  set2.filter(twa)                                //> res1: objsets.TweetSet = (_empty_, a body, _empty_)
  set2.filter0(twa, new Empty)                    //> res2: objsets.TweetSet = (_empty_, a body, _empty_)
  size(fil5)                                      //> res3: Int = 0
  set4c.union(set4d)                              //> adding elem: a body from (_empty_, a body, (_empty_, b body, (_empty_, c bod
                                                  //| y, _empty_)))
                                                  //| Output exceeds cutoff limit. 
}