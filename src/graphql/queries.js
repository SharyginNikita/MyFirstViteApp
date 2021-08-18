import gql from "graphql-tag";

export const getDoctorsGQL = gql`
    query getDoctors($offset: Int, $limit: Int) {
        getDoctors(offset: $offset, limit: $limit) {
            status
            errors {
                code
                message
            }
            doctors {
                id
                firstName
                secondName
                surName
                login
            }
        }
    }
`;

export const getPatientsGQL = gql`
    query getPatients($offset: Int, $limit: Int) {
        getPatients(offset: $offset, limit: $limit) {
            status
            errors {
                code
                message
            }
            patients {
                id
                firstName
                secondName
                surName
                dateBirth
                comment
                recommendedTime
                doctorId
            }
        }
    }
`;

export const getPatientGQL = gql`
    query getPatient($id: Int!) {
        getPatient(id: $id) {
            status
            errors {
                code
                message
            }
            patient {
                id
                firstName
                secondName
                surName
                dateBirth
                comment
                recommendedTime
                doctorId
            }
        }
    }
`;

export const getDoctorGQL = gql`
    query getDoctor($id: Int!) {
        getDoctor(id: $id) {
            status
            errors {
                code
                message
            }
            doctor {
                id
                firstName
                secondName
                surName
                login
            }
        }
    }
`;
