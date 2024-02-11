'use client';
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductPage ({ image, productName, category, price, seller }) {

    
    // const getProductDetails = async() => {
    //     const res = await fetch(`api/products/${params.id}`)
    //     const data = await res.json();
    //     console.log(data);
    // }
    // const params = useParams()
    // useEffect(() => {
    //     if (params.id){
    //         getProductDetails()
    //     }
    // },[])

    // const [activeImg, setActiveImage] = useState("/placeholder.png");
    // const [amount, setAmount] = useState(1);


    return (
        <div className='d-flex flex-column flex-lg-row justify-content-between p-4 w-100'>
            <div className='d-flex flex-column w-100 w-lg-50'>
                <div className='w-auto'>
                    <Image
                        src={image}                    
                        width={400}
                        height={300}
                        className="img-fluid object-fit-cover" 
                        style={{ height: '100%', width: '100%'}}
                        alt="Product Image" 
                    />
                </div>
                <div className='d-inline-flex flex-row w-auto'>
                    <div className='w-auto'>
                        <Image
                            src="/placeholder.png" 
                            width={150}
                            height={150}
                            className="img-fluid object-fit-cover pe-1 py-2" 
                            alt="Hero Banner" 
                        />
                    </div>
                    <div className='w-auto'>
                        <Image
                            src="/placeholder1.png" 
                            width={150}
                            height={150}
                            className="img-fluid object-fit-cover ps-1 py-2 " 
                            alt="Hero Banner" 
                        />
                    </div>
                </div>
            </div>
            <div className=' flex-column p-2 mx-lg-5 align-items-lg-center w-100 w-lg-50'>
                <div>
                    <h1 className='fw-bold'>{productName}</h1>
                    <h2 className='fw-semibold'>$ {price}</h2>
                    <br></br>
                    <h3>Product Description</h3>
                    <p>Seller: {seller}</p>
                    <p>Product Category: {category}</p>
                </div>
            </div>
        </div>
    )
}