var linknode=function(val){
                this.val=val;
                this.nextnode=null;
            }
var Links=function(){
                this.pos=0;
                this.head=null;
            }
            Links.prototype={
                push:function(value){
                    var node=new linknode(value);
                    if(this.pos==0){
                        this.head=node;
                        this.pos++;
                    }else{
                        var n=this.head;
                        for(var i=1;i<this.pos;i++){
                             n=n.nextnode;
                        }
                        n.nextnode=node;
                        this.pos++;
                    }
                },
                pop:function(){
                    var n=this.head;
                    for(var i=0;i<this.pos-2;i++){
                        n=n.nextnode;
                    }
                    document.write(n.nextnode.val+'<br/>');
                    n.nextnode=null;
                    this.pos--;
                },
                print:function(){
                    var n=this.head;
                    for(var i=0;i<this.pos;i++){
                        document.write(n.val+'<br/>');
                        n=n.nextnode;
                    }
                },
                insert:function(ps,value){
                    var n=this.head;
                    var node=new linknode(value);
                    if(ps>this.pos){
                        document.writeln("<p>超出范围无法添加</p>");
                    }
                    if(ps<0){
                        document.writeln("<p>超出范围无法添加</p>");
                    }
                    for(var i=0;i<ps;i++){
                        n=n.nextnode;
                    }
                    node.nextnode=n.nextnode;
                    n.nextnode=node;
                    this.pos++;
                },
                rm:function(ps){
                    var n=this.head;
                    if(ps<0||ps>this.pos){
                        document.write('要删除的数据不存在');
                    }
                    for(var i=0;i<ps;i++){
                        n=n.nextnode;
                    }
                    n.nextnode=n.nextnode.nextnode;
                    this.pos--;
                },
                length:function(){
                    document.write('length='+this.pos+"<br/>");
                }

            }

            module.exports = Links;
