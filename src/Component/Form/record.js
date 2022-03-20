import React,{ Component } from 'react';

var dataUrl = 'https://formnode.herokuapp.com/data'

class Record extends Component {
    constructor(){
        super()
        this.state = {
            fdata:''
        }
    }
    renderTable = () => {
        return this.state.fdata.map((item) => {
            return(
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td className='table-light'>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.age}</td>
                    <td>{item.education}</td>
                    <td>{item.income}</td>
                    <td>{item.city}</td>
                    <td>{item['sotMobile(h)']}</td>
                </tr>
            )
        })
    }
    render(){
        if(this.state.fdata){
            return(
                <div className='container'>
                    <h1>form data there</h1>
                    <table className='table table-hover'>
                        <thead className='table'>
                            <tr>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Education</th>
                                <th>Income(K)</th>
                                <th>State</th>
                                <th>Mobile(TS)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            )
        }
        else{
            return(
                <h1>wait</h1>
            )
        }
        
    }
    componentDidMount() {
        fetch(dataUrl,{method:'GET'})
        .then((res) => res.json()
        .then((data) => {
            this.setState({fdata:data})
        }))
    }
}
export default Record