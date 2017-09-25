/**
 * Created by yang on 2017/8/29.
 */
{
    let readonly=function (target,name,descriptor) {
        descriptor.writable=false;
        return descriptor
    };

    class Test{
        @readonly
        time(){
            return '2017-08-29'
        }
    }
    let test=new Test();

    test.time=function () {
        console.log('reset time');
    };
    console.log(test.time());
}
