
import { NextResponse } from "next/server";


import { db } from "@/lib/database";

export default async function  handler(req, res) {
              console.log(req.method);
        const data = req.body;
       
          if(req.method==="POST")
        {  
          var sql="INSERT INTO emp_table VALUES ('"+req.body.name+"','"+req.body.pincode+"')";
          db.query(sql,function(error,result){
            if(error){
              return res.send({
                status:"fail",
                message:error
              })
             
            }else {
              res.send({
                status:"success",
                message:"sucessfully registered",
              })
            }
          })
          console.log("POST");
        res.json({message:"POST REQ"})}

        res.json({message:"NOT POST REQ"})
        }

