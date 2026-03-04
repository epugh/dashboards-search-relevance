/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  EuiPageTemplate,
  EuiPageHeader,
  EuiText,
  EuiSpacer,
  EuiPanel,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiStat,
  EuiButton,
  EuiAccordion,
  EuiIcon,
  EuiBadge,
} from '@elastic/eui';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CoreStart } from '../../../../../src/core/public';

interface DashboardsViewProps extends RouteComponentProps {
  http: CoreStart['http'];
}

export const DashboardsView: React.FC<DashboardsViewProps> = ({ http, history }) => {
  return (
    <EuiPageTemplate paddingSize="l" restrictWidth="100%">
      <EuiPageHeader
        pageTitle="Dashboards"
        description="AI-powered insights and automated analysis for your search relevance workbench"
      />

      <EuiSpacer size="l" />

      {/* AI Summary Panel */}
      <EuiPanel color="primary" hasShadow={false} style={{ backgroundColor: '#E6F1FA' }}>
        <EuiFlexGroup gutterSize="m" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiIcon type="discuss" size="xl" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiTitle size="s">
              <h3>AI Summary: Strong query growth with opportunities to improve conversions</h3>
            </EuiTitle>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size="m" />
        <EuiText size="s">
          <p>
            Your search traffic is healthy with <strong>12.4K queries (+18.3%)</strong> and{' '}
            <strong>11.2% CTR (+3.1%)</strong>. However, <strong>89 zero-result queries</strong>{' '}
            represent missed opportunities. The User Behavior Analytics below show peak engagement
            during weekdays, with strong click distribution on top results. Review the Top 3
            insights for specific actions to reduce zero results and optimize high-performing
            categories.
          </p>
        </EuiText>
        <EuiSpacer size="m" />
        <EuiButton size="s" iconType="discuss">
          Discuss with AI
        </EuiButton>
      </EuiPanel>

      <EuiSpacer size="l" />

      {/* Expandable Section */}
      <EuiAccordion
        id="aiInsights"
        buttonContent="How AI-powered insights work for you"
        paddingSize="m"
      >
        <EuiSpacer size="m" />
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>
            <EuiPanel hasBorder>
              <EuiFlexGroup direction="column" gutterSize="s">
                <EuiFlexItem>
                  <EuiIcon type="clock" size="l" color="primary" />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiTitle size="xs">
                    <h4>Continuous Monitoring</h4>
                  </EuiTitle>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiText size="s" color="subdued">
                    <p>
                      AI analyzes your search data 24/7, identifying patterns and anomalies
                      without manual intervention.
                    </p>
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiPanel hasBorder>
              <EuiFlexGroup direction="column" gutterSize="s">
                <EuiFlexItem>
                  <EuiIcon type="search" size="l" color="primary" />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiTitle size="xs">
                    <h4>Smart Analysis</h4>
                  </EuiTitle>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiText size="s" color="subdued">
                    <p>
                      Provides insights and recommendations based on UBI data, query
                      performance, and relevance metrics.
                    </p>
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiPanel hasBorder>
              <EuiFlexGroup direction="column" gutterSize="s">
                <EuiFlexItem>
                  <EuiIcon type="check" size="l" color="primary" />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiTitle size="xs">
                    <h4>Analysis Only</h4>
                  </EuiTitle>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiText size="s" color="subdued">
                    <p>
                      AI identifies issues and suggests improvements but never makes
                      changes without your approval.
                    </p>
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiAccordion>

      <EuiSpacer size="l" />

      {/* User Behavior Insights */}
      <EuiTitle size="s">
        <h3>
          User Behavior Insights <EuiText size="s" color="subdued" style={{ display: 'inline' }}>(Last 7 Days)</EuiText>
        </h3>
      </EuiTitle>

      <EuiSpacer size="m" />

      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiPanel hasBorder>
            <EuiFlexGroup justifyContent="spaceBetween" alignItems="flexStart">
              <EuiFlexItem>
                <EuiText size="xs" color="subdued">
                  <p>QUERIES</p>
                </EuiText>
                <EuiSpacer size="s" />
                <EuiTitle size="l">
                  <h2>12.4K</h2>
                </EuiTitle>
                <EuiSpacer size="xs" />
                <EuiText size="s" color="success">
                  <strong>+18.3%</strong>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiIcon type="sortUp" color="subdued" />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiPanel hasBorder>
            <EuiFlexGroup justifyContent="spaceBetween" alignItems="flexStart">
              <EuiFlexItem>
                <EuiText size="xs" color="subdued">
                  <p>CLICK-THROUGH RATE</p>
                </EuiText>
                <EuiSpacer size="s" />
                <EuiTitle size="l">
                  <h2>11.2%</h2>
                </EuiTitle>
                <EuiSpacer size="xs" />
                <EuiText size="s" color="success">
                  <strong>+3.1%</strong>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiIcon type="sortUp" color="subdued" />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiPanel hasBorder>
            <EuiFlexGroup justifyContent="spaceBetween" alignItems="flexStart">
              <EuiFlexItem>
                <EuiText size="xs" color="subdued">
                  <p>ZERO RESULTS</p>
                </EuiText>
                <EuiSpacer size="s" />
                <EuiTitle size="l">
                  <h2>89</h2>
                </EuiTitle>
                <EuiSpacer size="xs" />
                <EuiText size="s" color="danger">
                  <strong>-12.4%</strong>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiIcon type="sortUp" color="subdued" />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageTemplate>
  );
};

export const DashboardsViewWithRouter = withRouter(DashboardsView);

export default DashboardsViewWithRouter;
