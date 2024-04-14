"use client"
const page = ({params, searchParams}) => {
    const {slug} =params;
    return (
        <div>
           Blog {slug}
        </div>
    );
}

export default page;