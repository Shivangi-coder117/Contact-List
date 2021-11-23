const express= require('express');
const path=require('path');
const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
    {
        name:"Shivangi",
        phone:"567890321"
    },
    {
        name:"Akku",
        phone:"987098321"
    },
    {
        name:"Anu",
        phone:"890765789"
    }


]

app.get('/',function(req,res)
{
    return res.render('home',{title:'Contact List',contacts:contactList});
    
})
app.get('/practice',function(req,res)
{
    return res.render('practice',{
        title:"Let us play with ejs"
    });
});
app.post('/create-contact',function(req,res)
{
   contactList.push(req.body);

   return res.redirect('back');
});
 app.get('/delete-contact',function(req,res)
 {
     console.log(req.query);
     let phone=req.query.phone;

     let contactIndex=contactList.findIndex(contact=> contact.phone==phone);

     if(contactIndex != -1)
     {
         contactList.splice(contactIndex,1);
     }
     return res.redirect('back');
 });





app.listen(port,function(err)
{
    if(err)
    {
        console.log('Error in running the server',err);
    }
    console.log('Yup! My express is running on port',port);
})