from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class EmployeeCreate(BaseModel):
    name: str
    department: str
    designation: str
    email: EmailStr


class AttendanceCreate(BaseModel):
    employee_name: str
    status: str
    date: str


class LeaveCreate(BaseModel):
    employee_name: str
    reason: str