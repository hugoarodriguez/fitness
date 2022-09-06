import { AiFillCheckCircle } from 'react-icons/ai';
import { FcTodoList } from 'react-icons/fc';
import { GrInProgress } from 'react-icons/gr';

const icon1 = <span style={{paddingRight: '10px'}}><AiFillCheckCircle  style={{fontSize: '20px'}}/></span>
const icon2 = <span style={{paddingRight: '10px'}}><FcTodoList  style={{fontSize: '20px'}}/></span>
const icon3 = <span style={{paddingRight: '10px'}}><GrInProgress  style={{fontSize: '20px'}}/></span>


const mockData = [
    {
        "id": "1",
        "icon": icon1,
        "title": 'To do',
        "tasks": [
            {
                "id": "1",
                "title": 'Learn JavaScript',
            },
            {
                "id": "2",
                "title": 'Learn Git',
            },
            {
                "id": "3",
                "title": 'Learn Python',
            },
        ],
    },
    {
        "id": "2",
        "icon": icon2,
        "title": 'In progress',
        "tasks": [
            {
                "id": "4",
                "title": 'Learn CSS',
            },
            {
                "id": "5",
                "title": 'Learn Golang',
            },
        ]
    },
    {
        "id": "3",
        "icon": icon3,
        "title": 'Completed',
        "tasks": [
            {
                "id": "6",
                "title": 'Learn HTML',
            },
        ]
    },
    {
        "id": "4",
        "icon": icon3,
        "title": 'Add',
        "tasks": [
            {
                "id": "7",
                "title": 'Learn HTML',
            },
        ]
    },
    {
        "id": "5",
        "icon": icon3,
        "title": 'Completed 2',
        "tasks": [
            {
                "id": "8",
                "title": 'Learn HTML',
            },
        ]
    }
];

export default mockData;