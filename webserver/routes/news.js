var express = require('express');
var router = express.Router();
var loginCredentials = require('../models/login');
var liveNews = require('../models/schema');


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});


 //localhost:8080/news/login
 router.post('/login',function(req,res,next)
  { 
    var user=new loginCredentials();
    if(req.body)
    {
      user.userName=req.body.userName;
      user.password=req.body.password;
      loginCredentials.find({userName:{$eq:req.body.userName}},function(err,users)
      {
        if(users=='')
        {
          user.save(function(err)
          {
            if(err)
            {
              res.send("Error in credentials");
            }
            else
            {
              res.send("Register successfully" );
            }
          });
        }
        else
        {
           res.send("UserName already exist" );
        }
      });
    }
    else
    {
      res.send("Fields cant be empty");
    }
  });

 //localhost:8080/news/add
 router.post("/addToDB",function(req ,res ,next) 
 {
   if(req.body)
   {
      var newssave = new liveNews();
      newssave.author = req.body.author;
      newssave.title = req.body.title;
      newssave.description = req.body.description;
      newssave.url = req.body.url;
      newssave.urlToImage = req.body.urlToImage;
      newssave.publishedAt = req.body.publishedAt;
      newssave.Comments = req.body.Comments;

      newssave.save(function(err)
      {
       if(err) 
       {
         res.send("Error in saving the news headlines");
       }
       else
       {
        res.send("Saved the news headlines in the mongo" );
        }
      });
   }
   else
   {
    res.send("No headline found for saving the headline");
    }
});

 //localhost:8080/news/delete
 router.delete("/delete",function(req,res) 
 {
   if(req.body)
   {
     request=req.body.title;
     liveNews.remove({title:request},function(err)
     {
       if(err)
       {
         res.send("Error in deleting the data");
       }
       else
       {
         res.send("Data is deleted successfully");
       }
      });
    }
   else
   {
     res.send("no data found to delete");
   }
  });


 /*localhost:8080/news/update*/
 router.put('/update', function(req, res){
  if(req.body)
  {
   request1=req.body.title;
   request2=req.body.Comments;
   liveNews.update({title:request1},{$set:{Comments:request2}},function(err){

    if(err) {
      res.send(err);
    }
    else  {
      res.send("News updated");
    }  
  });
 }
});
 
 /*localhost:8080/news/viewByID*/
 router.put('/viewByID', function(req, res, next) {
  
   liveNews.find({ _id: { $eq:req.body.id } },function(err,allnews){
     if(err) {
       res.send(err);
       console.log('error ocuured');
     }
     else {
     
      res.send(allnews);
    }
  });
 });
/*localhost:8080/news/viewAll */
router.get('/view', function(req, res, next) {
 liveNews.find({},function(err,allnews){
   if(err) {
     res.send(err);
     console.log('error ocuured');
   }
   else {
    var newsobject=[];
     allnews.forEach(function(newss,ind){
       newsobject[ind]=newss;
       
     });
     res.send(newsobject);
   }
 });
});
 module.exports = router;