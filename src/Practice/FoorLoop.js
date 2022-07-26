import {Button,Table} from 'react-bootstrap';

function Details (){
const Resume=[
    {name:"promis",email:"promis@patel.com",age:25,address:[
        {Hn:"12", city:"Ahmedabad"},
        {Hn:"34", city:"Surat"},
    ]},
    {name:"jordan",email:"jordan@patel.com",age:20,address:[
        {Hn:"12", city:"Ahmedabad"},
        {Hn:"34", city:"Surat"},
    ]},
    {name:"pen",email:"pen@patel.com",age:20,address:[
        {Hn:"12", city:"Ahmedabad"},
        {Hn:"34", city:"Surat"},
    ]}
];

return(
    <div className='map'>
    <h1>Personal Information</h1>
    <Table border='1' striped>
    <tbody>
    <tr>
    <td>Id</td>
    <td>Name</td>
    <td>Email</td>
    <td>Age</td>
    <td>Address</td>
    </tr>
    {
        Resume.map((data,i)=>
      
        <tr key={i}>
        <td>{i + 1}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.age}</td>
        <td>
        <Table striped variant='dark'>
        <tbody>
        
        {
            data.address.map((item,i)=>
            <tr key={i}>
            <td>{item.Hn}</td>
            <td>{item.city}</td>
            </tr>
            )
        }
        </tbody>
        </Table>
        </td>
        </tr> 
        )
    }
    </tbody>
    </Table>
    </div>
)
}
export default Details