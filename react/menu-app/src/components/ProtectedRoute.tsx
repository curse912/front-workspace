

import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../store/store";

interface Props{
    children :  ReactNode; // 자식컴포넌트
    requiredRoles?:string[];
    redirectTo?:string;
}
export default function ProtectedRoute(
        {children,requiredRoles=[],redirectTo="/login"}:Props ){
    const {isAuthenticated,user} = useSelector((state:RootState) => state.auth);

    // 로그인 하지 않은 경우
    if(!isAuthenticated){
        alert("로그인 후 이용해 주세요");
        return <Navigate to={redirectTo} replace />
    }

    // 권한이 필요한 경우 권한 확인
    if(requiredRoles.length>0 && user){
        const hasRequiredRole = requiredRoles.some(role => user.roles.includes(role));

        if(!hasRequiredRole){
            return <Navigate to="/unauthorized" replace />;
        }
    }

    return <>{children}</>
}