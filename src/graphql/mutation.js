import gql from "graphql-tag";

export const loginGQL = gql`
    mutation login {
        login
    }
`;

export const changePasswordGQL = gql`
    mutation changePassword($id: Int!, $password: String!) {
        changePassword(id: $id, password: $password)
    }
`;

export const createDoctorGQL = gql`
    mutation createDoctor(
        $login: String!
        $password: String!
        $firstName: String!
        $secondName: String!
        $surName: String
    ) {
        createDoctor(
            login: $login
            password: $password
            firstName: $firstName
            secondName: $secondName
            surName: $surName
        ) {
            doctor {
                id
            }
        }
    }
`;

export const createPatientGQL = gql`
    mutation createPatient(
        $firstName: String!
        $secondName: String!
        $surName: String
        $dateBirth: String!
        $comment: String
        $recommendedTime: Float
    ) {
        createPatient(
            firstName: $firstName
            secondName: $secondName
            surName: $surName
            dateBirth: $dateBirth
            comment: $comment
            recommendedTime: $recommendedTime
        ) {
            patient {
                id
            }
        }
    }
`;

export const updatePatientGQL = gql`
    mutation updatePatient(
        $id: Int!
        $doctorId: Int!
        $firstName: String!
        $secondName: String!
        $surName: String
        $dateBirth: String!
        $comment: String
        $recommendedTime: Float
    ) {
        updatePatient(
            id: $id
            doctorId: $doctorId
            firstName: $firstName
            secondName: $secondName
            surName: $surName
            dateBirth: $dateBirth
            comment: $comment
            recommendedTime: $recommendedTime
        ) {
            patient {
                id
            }
        }
    }
`;

export const updateDoctorGQL = gql`
    mutation updateDoctor(
        $id: Int!
        $firstName: String!
        $secondName: String!
        $surName: String
        $login: String!
    ) {
        updateDoctor(
            id: $id
            firstName: $firstName
            secondName: $secondName
            surName: $surName
            login: $login
        ) {
            doctor {
                id
            }
        }
    }
`;
