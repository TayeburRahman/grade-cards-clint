import React from 'react';
import { Button, Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from '../../Firebase/Hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
       let { user, isLoading } = useAuth();
       if (isLoading) {
        return (
          <Button className="mt-5" variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        );
      };
      return (
        <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/sing_in",
                  state: { from: location },
                }}
              />
            )
          }
        />
      );
    };
export default PrivateRoute;