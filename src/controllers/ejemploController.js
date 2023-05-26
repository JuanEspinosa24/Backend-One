import { response } from "../helpers/Response.js";

let data = [
    {
        _id: "1",
        name: "juan",
        lastname: "espinosa",
        age: 18
    },
    {
        _id: "2",
        name: "manuel",
        lastname: "espinosa",
        age: 20
    },
    {
        _id: "3",
        name: "luis",
        lastname: "espinosa",
        age: 25
    },
];

const userCtrl={}

userCtrl.getData = (req, res) => {

    try {

        response(res,200,true,data,"lista de usuarios");

    } catch (error) {
        response(res,500,false,"",error.message);
    }

}

userCtrl.getDataByid=(req,res)=>{
    try {
        const {id}=req.params
        //const {search}=req.query

        const user=data.find(item=>item._id===id)
        if (!user){
            return response(res,404,false,"","usuario no encontrado");
        }

        response(res,200,true,
            user,
            //{
            //parametro:id,
            //query:search,
        //},
        "test")
       
    } catch (error) {
        response(res,500,false,"",error.message);
    }
}

userCtrl.saveData=(req,res)=>{
    try {
        const {_id,name,lastname,age}=req.body

        data.push({_id,name,lastname,age:parseInt(age)})

        response(res,201,true,{
            name,
            lastname,
            age,
        },"registro guardado")

    } catch (error) {
        response(res,500,false,"",error.message);
    }

};

userCtrl.actualizar=(req,res)=>{
    try {
        const {id}=req.params

        //const {_id,name,lastname,age}=req.body

        const newData=data.map((item)=>item._id===id?{...req.body, age:parseInt(req.body.age)}:item)

        data = newData

        response(res,200,true,"","usuario actualizado");
    } catch (error) {
        response(res,500,false,"",error.message);
    }
}


userCtrl.eliminar=(req,res)=>{
    try {
        const {id}=req.params

        const newData=data.filter(item=>item._id!==id)
        data = newData

        response(res,200,true,id,"usuario eliminado");
    } catch (error) {
        response(res,500,false,"",error.message);
    }
};

export default userCtrl

//JuanMa