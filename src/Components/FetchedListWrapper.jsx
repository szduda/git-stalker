import React from 'react'
import { LoadingIndicator } from './Theme'

export default ({ visible, loading, hasData, noDataMessage, children, ...rest }) => visible
  ? (
    <div {...rest}>
      <LoadingIndicator visible={loading} />
      {hasData
        ? (
          <>{children}</>
        ) : (
          !loading && <p>{noDataMessage}</p>
        )}
    </div>
  ) : null