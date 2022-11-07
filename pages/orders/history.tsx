import NextLink  from "next/link";
import { Button, Chip, Grid, Link, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ShopLayout } from '../../components/layouts'


const columns: GridColDef[]=[
    {field: 'id',headerName:'ID',width:100 },
    {field: 'fullname',headerName:'Nombre',width:300},

    {   field: 'paid',
        headerName:'Pagada',
        description:'Info de la orden',
        width:300,
        renderCell:(params)=>{
            return (
                params.value
                ? <Chip label='Orden pagada' variant='outlined' color='success'/>
                : <Chip label='No pagada' variant='outlined' color='error'/>
            )
        }
    },
    {   field: 'order',
        headerName:'Orden',
        description:'Ver orden',
        width:200,
        sortable: false,
        renderCell:(params)=>{
            return (
                <NextLink legacyBehavior href={`/orders/${params.row.id}`} passHref>
                    <Link>
                        <Button variant="contained">Ver Orden</Button>
                    </Link>
                </NextLink>
            )
        }
    },
];

const rows=[
    {id:1,paid:true,fullname: 'Nati Puertas'},
    {id:2,paid:false,fullname: 'Lila jaimez'},
    {id:3,paid:true,fullname: 'Roque Sanchez'},
    {id:4,paid:false,fullname: 'Ruth Batallanes'},
    {id:5,paid:true,fullname: 'Debora Cuevas'},
]

const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de Ordenes'} pageDescription={'Historial de Ordenes del cliente'}>
        <Typography variant='h1' component={'h1'}>Historial de Ordenes</Typography>

        <Grid container>
            <Grid item xs={12} sx={{height:650,width:'100%'}}>
                <DataGrid 
                    columns={columns}
                    rows={rows}
                    pageSize={10}
                    rowsPerPageOptions={[10]}          
                />
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage